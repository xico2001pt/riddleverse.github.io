---
layout: level
permalink: stories/christmas2024/act1/echoes-of-light/
cover_img: stories/christmas2024/echoes-of-light.webp
category: christmas2024
level: 4
title: "Day 4: Echoes of Light"
previously: >
    As you approached the Ember of Warmth, a shadowy presence manifested on the path. The air grew colder and darker, and a sinister force appeared between you and the Ember, blocking your way forward and filling you with dread.
narrative: >
    After the force appeared, it struck you with a powerful blow, hurling you far from the path to the Ember of Warmth. Dazed and weakened from the fall, you find yourself in a strange field, disoriented and surrounded by towering walls of snow and ice, which block your way back to the Ember.
    <br><br>
    The ground beneath you resembles a grid, and scattered across it are several solar panels, reflecting faint beams of sunlight that struggle to reach the cold earth. Nearby, you spot a magnifying glass — a tool that could focus the sunlight into a beam strong enough to melt the ice.
    <br><br>
    Weak and exhausted from the fall, you know your strength is limited. You can only rotate two of the solar panels, and they must be positioned perfectly to guide the light toward the snow-covered path blocking your exit. The grid is like a chessboard, and the task before you requires precision and clever thinking. Only by reflecting and focusing the sunlight in just the right way can you clear the snow and continue your journey toward the Ember.
objective: >
    Your task is to rotate two mirrors on the grid to reflect the sunlight from the top left corner to the bottom right, where the snow is blocking your way. Strategically rotate the mirrors to create a path for the beam to reach the snow-covered exit.
outcome: >
    After carefully rotating the solar panels, you watch as the beam of sunlight bounces across the icy grid and strikes the snow-covered wall. Slowly, the thick layers of ice and snow begin to melt, clearing a narrow path ahead. Exhausted, you take a few steps forward, but just as you reach the opening, the malevolent force returns. Its presence is overwhelming — far more powerful than you anticipated.
    <br><br>
    The cold intensifies as the dark entity looms before you, and you realize the futility of trying to face it alone. Despite your best efforts, your weakened state and lack of support make the task impossible. The Ember of Warmth lies just beyond, but without the strength of the Guardian of the Hearth, there’s no way to defeat this force or reach the Ember.
    <br><br>
    You turn back, knowing that your next move is to free the Guardian. It's the only way to stand a chance against the dark force and reignite the Ember. Your journey now takes you deeper into the Frostspire, where the Guardian is imprisoned.
---

You are on a grid with solar panels scattered across the field. The top-left corner contains the sunlight source focused through a magnifying glass, and the bottom-right corner is blocked by snow and ice, preventing your exit.

Due to your weakened state, you can only rotate two solar panels. Your task is to position them so that the sunlight reflects from panel to panel and reaches the snow-covered path at the bottom-right corner, melting the snow and clearing the way.

Here a representation of your location:

<div><img class="challenge-img" src="/assets/img/stories/christmas2024/gridfield-with-panels.webp"></div>

Keep these aspects in mind:
- Rotate **exactly two** solar panels to direct the sunlight from the top-left corner to the bottom-right corner.
- The beam of light is casted with a **45-degree** angle, i.e. diagonally (as depicted by the arrow).
- The panels **reflect 100%** of the light and the incidence angle **is the same** as the reflection angle.
- The solar panels can only be rotated by a **90-degree** angle. Therefore, their orientation is either **horizontal** or **vertical**.
- The answer must contain the **coordinates** of the solar panels that need to be **rotated**.
- The answer must folow the format `x,y x,y`, where `x` indicates the column index and `y` indicates the row index. The top left corner position is `1,1`, while the bottom right position is `8,8`. The order of the positions is irrelevant.

<details>
 <summary>Hint 1</summary> 
 The light moves in straight lines and bounces at 90-degree angles from the panels. Consider which panels would redirect the ligth to a valid position.
</details>
<details>
 <summary>Hint 2</summary>
 Try starting from the end position and backtracking the beam path. There aren't so many options available...
</details>