import { Download } from "lucide-react";

export function StickyDownload() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
        className="btn-primary w-full"
      >
        <Download className="h-4 w-4" />
        Download on Play Store
      </a>
    </div>
  );
}
