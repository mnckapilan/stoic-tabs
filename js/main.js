(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const quotes = [
    {
      quote: "How does it help… to make troubles heavier by bemoaning them?",
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
      author: "Seneca",
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
    {
      quote: "Seek not the good in external things; seek it in yourselves.",
      author: "Epictetus",
    },
    {
      quote:
        "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Demand not that things happen as you wish, but wish them to happen as they do, and you will go on well.",
      author: "Epictetus",
    },
    {
      quote:
        "As in a tale, so is life: not how long it is, but how good it is, is what matters.",
      author: "Seneca",
    },
    {
      quote:
        "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
      author: "Epictetus",
    },
    {
      quote: "It is a rough road that leads to the heights of greatness.",
      author: "Seneca",
    },
    {
      quote:
        "He suffers more than necessary, who suffers before it is necessary.",
      author: "Seneca",
    },
    {
      quote:
        "Begin at once to live, and count each separate day as a separate life.",
      author: "Seneca",
    },
    {
      quote: "He who is brave is free.",
      author: "Seneca",
    },
    {
      quote: "Ignorance is the cause of fear.",
      author: "Seneca",
    },
    {
      quote:
        "It is not the man who has little, but the man who craves more, that is poor.",
      author: "Seneca",
    },
    {
      quote:
        "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
      author: "Seneca",
    },
    {
      quote: "Only time can heal what reason cannot.",
      author: "Seneca",
    },
    {
      quote:
        "They lose the day in expectation of the night, and the night in fear of the dawn.",
      author: "Seneca",
    },
    {
      quote:
        "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Waste no more time arguing what a good man should be. Be One.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "The best revenge is not to be like your enemy.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective — I’ll gladly change. It’s the truth I’m after, and the truth never harmed anyone.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "Be tolerant with others and strict with yourself.",
      author: "Marcus Aurelius",
    },
    {
      quote:
        "No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.",
      author: "Seneca",
    },
    {
      quote:
        "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.",
      author: "Seneca",
    },
    {
      quote:
        "People are frugal in guarding their personal property; but as soon as it comes to squandering tim ethey are most wasteful of the one thing in which it is right to be stingy.",
      author: "Seneca",
    },
  ];

  function newQuote(quotes) {
    let n = getRandomInt(0, quotes.length);
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    if (quote && author) {
      quote.innerText = quotes[n].quote;
      author.innerText = "—" + quotes[n].author;
    }
  }

  newQuote(quotes);
})();