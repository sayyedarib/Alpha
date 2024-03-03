# Hackathon_01_2024
Vercera Hackathon 2024 AMU [presentation](https://www.canva.com/design/DAF-cU2M2Uk/WUMvyRB8bnXdZIQ9srC18A/view)

# Project Alpha
This project aims to solve a common problem faced by individuals who spend a lot of time playing computer games or those who engage in minimal physical activity. It provides a platform that integrates gaming with physical movement, promoting a more active lifestyle while still enjoying the gaming experience.

Utilizing computer vision technology such as MoveNet, the platform allows users to control game actions using their camera. For example, raising a left hand can be interpreted as a command to turn left in the game. This not only makes the gaming experience more immersive but also encourages physical activity.

The project uses Python for the backend, with libraries such as TensorFlow, OpenCV, Matplotlib, PyAutoGUI, and NumPy. The frontend is built using Next.js, a popular React framework.
[Demo video](https://www.youtube.com/watch?v=sAkHgdr54wc)

## Prerequisites

- Python 3.10.12
- Node.js and npm (for the Next.js app)

## Python Dependencies

This project requires the following Python libraries:

- tensorflow
- opencv-python
- matplotlib
- pyautogui
- numpy

You can install these dependencies using pip in your python environment (use the same env to run pose-detection/main.ipynb):

```bash
pip install tensorflow opencv-python matplotlib pyautogui numpy
```

## Running the Next.js App
First, navigate to the directory containing the Next.js app:
```bash
cd ui
```

Install dependencies
```bash
npm install
```


Run the app
```bash
npm run dev
```
