export const glossary = {
  "AI": "Artificial intelligence — the usual umbrella term for systems (like here) that learn from examples.",
  "machine learning": "Machine learning — the usual term for teaching a computer from data instead of fixed hand-written rules.",
  "training": "Training — the standard AI/ML word for running practice loops on your data (similar idea to “practice”).",
  "neural network": "Neural network — the usual term for layered math models loosely inspired by neurons wiring together.",
  "loss": "Loss — the standard AI word for how wrong or “confused” the model is right now (same idea as “confusion score”). Lower is better.",
  "epoch": "Epochs — the standard AI word for what we call “rounds”: one full pass where the model looks at every training example once.",
  "latent space": "Latent space — the usual term for the AI’s compressed internal representation of your data (often described as its “memory” of patterns).",
  "weights": "Weights — the standard term for the numbers inside the network that get updated when it learns (same idea as “number adjustments” after each mistake).",
  "learning rate": "Learning rate — the standard term for how large each update step is after an error (same idea as “adjustment size”: how much it changes its numbers per mistake).",
  "latent dimension": "Latent space / latent dimension — the usual terms for how rich that internal “memory” can be (your screen says “latent size”). Bigger can hold more detail but is harder to learn.",
  "augmentation": "Augmentation — the usual ML word for creating extra variations (flip, crop, color jitter) so the model doesn’t just memorize pixels.",
  "batch size": "Batch — the standard ML word for how many examples are grouped together before one weight update (same idea as “group size”).",
  "embedding": "Embedding — the usual term for turning words or images into vectors of numbers the model can compute with.",
  "retrieval": "Retrieval — the usual term for pulling the closest-matching examples from a library by meaning.",
  "encoder": "Encoder — the usual term for the part that squeezes an input into a compact internal code.",
  "decoder": "Decoder — the usual term for the part that expands an internal code back into an output (related jargon: reconstruction / redrawing from memory).",
  "parameters": "Parameters — the usual AI/ML word for adjustable settings and the learned numbers inside the model (often casually called “settings”).",
  "reconstruction": "Reconstruction — the usual ML word for the model redrawing or rebuilding an output from its internal representation.",
};

if (typeof window !== 'undefined') {
  window.glossary = Object.fromEntries(
    Object.entries(glossary).map(([k, v]) => [k.toLowerCase(), v])
  );
}
