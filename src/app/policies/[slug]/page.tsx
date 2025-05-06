import { siteConfig, getPolicyBySlug, Policy } from '@/config/site';
import { notFound } from 'next/navigation';
import { FileText } from 'lucide-react';

export async function generateStaticParams() {
  return siteConfig.policies.map(policy => ({
    slug: policy.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const policy = getPolicyBySlug(params.slug);
  if (!policy) {
    return {
      title: 'Policy Not Found',
    };
  }
  return {
    title: `${policy.title} | ${siteConfig.name}`,
    description: `Read the ${policy.title} for ${siteConfig.name}.`,
  };
}

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = getPolicyBySlug(params.slug);

  if (!policy) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-10">
        <FileText className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{policy.title}</h1>
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: policy.content }} 
        />
      </section>
    </div>
  );
}
