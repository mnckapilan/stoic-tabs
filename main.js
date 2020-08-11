(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  const qutoes = [
    {
      quote: "How does it help…to make troubles heavier by bemoaning them?",
      author: "Seneca",
    },
    {
      quote:
        "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "We are more often frightened than hurt; and we suffer more from imagination than from reality.",
      author: "Seneca",
    },
    {
      quote:
        "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Why should I demand from fortune that she should give me this and that rather than demand from myself that I should not ask for them? why should I ask for them, after all? am I to pile them up in total forgetfulness of the frailty of human existence?",
      author: "Seneca",
    },
    {
      quote:
        "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
      author: "Marcus Aurelius",
    },
    {
      quote: "If a man knows not which port he sails, no wind is favorable.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.",
      author: "Seneca",
    },
    {
      quote:
        "External things are not the problem. It's your assessment of them. Which you can erase right now.",
      author: "Marcus Aurelius",
    },
  ];

  function newQuote(quotes) {
    let n = getRandomInt(0, quotes.length);
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    if (quote && author) {
      quote.innerText = qutoes[n].quote;
      author.innerText = "—" + qutoes[n].author;
    }
  }

  newQuote(qutoes);
})();
