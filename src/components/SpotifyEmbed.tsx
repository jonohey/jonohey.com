type Props = {
  id: string;
  title: string;
  kind?: "album" | "playlist";
  height?: number;
  highlight?: boolean;
};

export function SpotifyEmbed({ id, title, kind = "album", height = 352, highlight = false }: Props) {
  return (
    <iframe
      title={`${title} on Spotify`}
      src={`https://open.spotify.com/embed/${kind}/${id}?utm_source=generator${highlight ? "" : "&theme=0"}`}
      width="100%"
      height={height}
      style={{ height }}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className="block w-full rounded-xl border-0 bg-panel"
    />
  );
}
