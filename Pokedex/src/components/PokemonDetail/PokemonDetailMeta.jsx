export default function PokemonDetailMeta({ height, weight }) {
  return (
    <div className="stats shadow w-full bg-base-200 border border-base-300 rounded-xl mb-4">
      <div className="stat">
        <div className="stat-title text-cyan-300">Height</div>
        <div className="stat-value text-cyan-100">{height}m</div>
      </div>
      <div className="stat">
        <div className="stat-title text-cyan-300">Weight</div>
        <div className="stat-value text-cyan-100">{weight}kg</div>
      </div>
    </div>
  );
}