import Category_Dropdown from "./category_dropdown";

interface SelectOption {
    value: string;
    label: string;
}

interface GameloopSettingsCardProps {
  selectedOption: SelectOption;
  onOptionChange: (option: SelectOption) => void;
  onDifficutlyChange: (difficulty: string) => void;
  difficulty: string;
  ChangeStatus: () => void;
}

const GameloopSettingsCard: React.FC<GameloopSettingsCardProps> = ({ 
  selectedOption: selectedCategory,
  onOptionChange: setSelectedCategory,
  onDifficutlyChange,
  difficulty,
  ChangeStatus
}) => {

  return (
    <div className="settings-container">
      <div className="settings-bar">
        <h2>Category</h2>
        <Category_Dropdown 
          selectedOption={selectedCategory}
          onOptionChange={setSelectedCategory}
        />
      </div>
      <div className="settings-bar">
        <h2>Difficulty</h2>
        <div className="radio-options">
          <label className={`input-styling ${difficulty === "easy" ? "checked" : ""}`}>
            <input
              className="hidden"
              type="radio"
              name="difficulty"
              value="easy"
              checked={difficulty === "easy"}
              onChange={(e) => onDifficutlyChange(e.target.value)}
            />
            Easy
          </label>
          <label className={`input-styling ${difficulty === "medium" ? "checked" : ""}`}>
            <input
              className="hidden"
              type="radio"
              name="difficulty"
              value="medium"
              checked={difficulty === "medium"}
              onChange={(e) => onDifficutlyChange(e.target.value)}
            />
            Medium
          </label>
          <label className={`input-styling ${difficulty === "hard" ? "checked" : ""}`}>
            <input
              className="hidden"
              type="radio"
              name="difficulty"
              value="hard"
              checked={difficulty === "hard"}
              onChange={(e) => onDifficutlyChange(e.target.value)}
            />
            Hard
          </label>
        </div>
      </div>
      
      <div className="settings-bar empty">
        <button onClick={ChangeStatus}>Play</button>
      </div>
    </div>
  );
};

export default GameloopSettingsCard;