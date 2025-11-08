const questions = [
  {
    question: "¿En qué región se encuentra Machu Picchu?",
    options: ["Cusco", "Arequipa", "Ica", "Lima"],
    answer: "Cusco",
  },
  {
    question: "¿Cuál es la playa más famosa de Piura?",
    options: ["Máncora", "Huacachina", "Punta Sal", "Paracas"],
    answer: "Máncora",
  },
  {
    question: "¿En qué región está la ciudad blanca?",
    options: ["Arequipa", "Cusco", "Lima", "Puno"],
    answer: "Arequipa",
  },
  {
    question: "¿Dónde se encuentra el Lago Titicaca?",
    options: ["Puno", "Cusco", "Ica", "Lima"],
    answer: "Puno",
  },
];

function Game() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("¡Correcto!");
    } else {
      setFeedback(`Incorrecto. La respuesta correcta es ${questions[currentQuestion].answer}`);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback("");
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  if (finished) {
    return (
      <div className="text-center p-6 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">¡Juego terminado!</h2>
        <p className="text-xl">
          Tu puntuación final es {score} / {questions.length}
        </p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setFinished(false);
            setFeedback("");
          }}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Reiniciar
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-6 text-gray-900 dark:text-white transition-colors">
      <h2 className="text-2xl font-bold mb-6">
        {questions[currentQuestion].question}
      </h2>
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && (
        <p className="mt-4 font-semibold text-yellow-600 dark:text-yellow-400">
          {feedback}
        </p>
      )}
      <p className="mt-6 text-lg font-medium text-gray-800 dark:text-gray-200">
        Puntuación: {score}
      </p>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("movie-detail"));
