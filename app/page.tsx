import Counter from "@/components/Counter";

export default function Page() {
  return (
    <main className="main-layout">
      <h1 className="page-title">Next.js Counter</h1>

      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}
