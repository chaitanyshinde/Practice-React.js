function TodoFilter({
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}) {
  const filters = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className={`filter-btn ${filter === f.key ? "active" : ""}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {hasCompleted && (
        <button onClick={onClearCompleted} className="clear-btn">
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default TodoFilter;
