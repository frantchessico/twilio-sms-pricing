export default function Footer() {
  return (
    <p className="mb-8 text-sm text-muted-foreground text-center">
      &copy; <a href="https://franciscoinoque.tech">Francisco Inoque</a> • {new Date().getFullYear()}
    </p>
  );
}