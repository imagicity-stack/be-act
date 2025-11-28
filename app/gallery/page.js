'use client';

import SectionHeader from '../../components/SectionHeader';
import GalleryGrid from '../../components/GalleryGrid';
import { galleryItems } from '../../lib/content';

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader title="Gallery" subtitle="Masonry moments with smooth hover zoom." />
      <GalleryGrid items={galleryItems} />
    </div>
  );
}
