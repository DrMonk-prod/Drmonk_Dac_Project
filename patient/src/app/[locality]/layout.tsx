import SearchDoctor from "@/components/SearchDoctor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <SearchDoctor />
      {children}
    </div>
  );
}
