export default function PublicRootLayout({
  children,
}: React.PropsWithChildren) {
  return <main className="w-full min-h-dvh">{children}</main>;
}
