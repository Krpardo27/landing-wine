
export default function Section({ children }: React.PropsWithChildren) {
  return (
    <section className="py-8 px-4 lg:py-20 lg:px-6 max-w-7xl mx-auto">
      {children}
    </section>
  );
}