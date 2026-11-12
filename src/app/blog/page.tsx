import { blogPosts } from "@/data/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Hypnothérapie à Lanvollon | Yves Deniau",
  description:
    "Articles sur l'hypnothérapie par Yves Deniau, hypnothérapeute à Lanvollon : stress, tabac, phobies, deuil amoureux, crises d'angoisse.",
  alternates: {
    canonical: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog",
  },
};



const sortedBlogPosts = [...blogPosts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-12 mx-auto bg-linear-to-tr from-vertSapin to-green-50 lg:px-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedBlogPosts.map((post) => (
          <Link href={`/blog${post.url}`} key={post.id}>
            <Card className="h-full pt-0 overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/yves-deniau.jpg"
                      alt="Hypnothérapeute Lanvollon"
                    />
                    <AvatarFallback>YD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Yves DENIAU
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                </div>
                <CardTitle className="mt-4 text-xl line-clamp-2 hover:text-primary ">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
