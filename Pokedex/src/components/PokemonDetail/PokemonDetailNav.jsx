export default function PokemonDetailNav({ currentId, onNavigate, generation }) {
  const getMinMaxIds = () => {
    if (!generation) return { min: 1, max: 1025 };
    return {
      min: generation.offset + 1,
      max: generation.offset + generation.limit
    };
  };

  const { min, max } = getMinMaxIds();

  return (
    <div className="flex justify-center gap-8 mt-8">
      <button
        onClick={() => onNavigate('prev')}
        className="btn btn-circle btn-lg bg-cyan-700 text-white border-cyan-900 hover:bg-cyan-900"
        disabled={currentId === min}
      >
        ←
      </button>
      <button
        onClick={() => onNavigate('next')}
        className="btn btn-circle btn-lg bg-cyan-700 text-white border-cyan-900 hover:bg-cyan-900"
        disabled={currentId === max}
      >
        →
      </button>
    </div>
  );
}