---
layout: level
permalink: stories/christmas2024/act1/day-2-the-rotating-labyrinth/
cover_img: stories/christmas2024/the-rotating-labyrinth.webp
category: christmas2024
level: 2
title: "Day 2: The Rotating Labyrinth"
previosly: >
    After unlocking the ancient gates of the Frosty Forest, you entered the Guardian’s domain — a land now gripped by an unnatural chill.
narrative: >
    As you venture further into the Guardian’s keep, the fog thickens, and you find yourself standing before a massive structure made entirely of ice — the Rotating Labyrinth. People speak of this labyrinth as ever-shifting, a living maze that defends the path to the Ember of Warmth. Each step you take causes the walls to twist and the corridors to rotate, disorienting even the bravest of souls. To prepare for the challenge, you begin drawing the maze on a piece of paper, hoping to better navigate its twists and turns.

    The entrance looms before you, and you know that to reach the Ember, you must outwit the labyrinth’s magic. But beware, for every move you make will cause the maze to rotate, shifting the very ground beneath your feet. The journey ahead requires both cleverness and precision.
objective: >
    Your objective is to navigate the Rotating Labyrinth. With each step, the maze rotates 90 degrees clockwise. Solve the maze and plan your steps carefully to reach the exit and continue your quest to reignite the Ember of Warmth.
outcome: >
    After carefully navigating through the rotating labyrinth, the walls cease their movement, and you find the exit. The cold has deepened, but a distant light calls you onward. The Ember of Warmth is near, yet the Guardian's final trial awaits.
    <br><br>
    Tomorrow, you will face the Guardian’s test—a challenge meant only for those worthy of restoring the Ember’s flame.
---

Knowing that, with each step you make, the maze rotates 90 degrees clockwise, you must determine the sequence of cardinal directions you must follow at each step in order to successfully reach the exit.

Here is the maze that you drew:

<div><img class="challenge-img" src="/assets/img/stories/christmas2024/rotating-labyrinth-sketch.webp" width="20%"></div>

Notice the following assumptions:
- You already **start inside** the maze, at the initial tile **(marked with red)**.
- The image is represented so that the **North** direction is pointing **upwards** and the **South** direction is pointing **downwards**.
- The sequence must **only contain** the letters `N`, `S`, `E`, and `W`. An example of an answer (obviously wrong) is `SENSW`.

<details>
 <summary>Hint 1</summary>
 The simplest (yet most time-consuming) approach is to determine the path <b>dynamically</b>, by rotating the maze each time you make a move. But there is a clever way to solve it...
</details>

<details>
 <summary>Hint 2</summary>
 The second approach consists in determining the path <b>statically</b>, by solving the path while ignoring the rotations. After that, you only need to rotate each step according to its position in the sequence. For example, the second step should be rotated by 90 degrees, the third by 180 degrees, and so on.
</details>