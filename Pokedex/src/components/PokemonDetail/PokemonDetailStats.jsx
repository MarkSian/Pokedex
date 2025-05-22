export default function PokemonDetailStats({ stats }) {
  return (
    <div className="mt-6 rounded-xl shadow-lg bg-base-200 border border-base-300 p-6">
      <h3 className="text-xl font-bold mb-4 text-cyan-300">
        Base Stats
      </h3>
      {stats.map(stat => (
        <div key={stat.name} className="mb-2">
          <div className="flex justify-between">
            <span className="capitalize text-cyan-200 font-semibold">{stat.name.replace('-', ' ')}</span>
            <span className="text-cyan-100 font-bold">{stat.value}</span>
          </div>
          <progress
            className="progress progress-info w-full"
            value={stat.value}
            max="250"
          ></progress>
        </div>
      ))}
    </div>
  );
}