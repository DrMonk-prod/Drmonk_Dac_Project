import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

function HealthArticles() {
  const articles = [
    {
      id: 1,
      title: "10 Tips for Better Heart Health",
      excerpt:
        "Learn simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease.",
      author: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/articles.svg",
      category: "Cardiology",
    },
    {
      id: 2,
      title: "Managing Diabetes: A Complete Guide",
      excerpt:
        "Everything you need to know about managing diabetes effectively, from diet tips to medication management.",
      author: "Dr. Michael Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      image: "/articles.svg",
      category: "Endocrinology",
    },
    {
      id: 3,
      title: "Mental Health in the Digital Age",
      excerpt:
        "Understanding the impact of technology on mental health and strategies to maintain psychological well-being.",
      author: "Dr. Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "/articles.svg",
      category: "Psychiatry",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Health Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest health tips and medical insights
            </p>
          </div>
          <Button variant="outline">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 p-2"
            >
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.png"}
                  alt={article.title}
                  width={0}
                  height={0}
                  className="w-full rounded-lg"
                />
                <div className="absolute top-4 right-2">
                  <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HealthArticles;
