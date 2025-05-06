import { getProducts, getCategories, type Product } from '@/services/product';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Filter, ListFilter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// This is a server component, so we can fetch data directly
export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = typeof searchParams?.category === 'string' ? searchParams.category : undefined;
  const products: Product[] = await getProducts({ category });
  const categories: string[] = await getCategories();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">Our Collection</h1>
        <p className="text-lg text-muted-foreground">Explore our range of handcrafted natural products.</p>
      </div>

      {/* Filters and Sorting Controls - Placeholder */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters
          </Button>
          <span className="text-sm text-muted-foreground">{products.length} products</span>
        </div>
        
        <div className="flex items-center gap-4">
            <Select defaultValue="popularity">
                <SelectTrigger className="w-[180px]">
                    <ListFilter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
        </div>
      )}

      {/* Pagination - Placeholder */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" className="mr-2">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
