export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-zinc-600">
        <div className="flex justify-center">
          <div className="text-zinc-500">© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
