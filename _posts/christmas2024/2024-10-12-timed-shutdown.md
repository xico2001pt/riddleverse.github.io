---
layout: level
permalink: stories/christmas2024/act2/timed-shutdown/
cover_img: stories/christmas2024/timed-shutdown.webp
category: christmas2024
level: 10
title: "Day 10: Timed Shutdown"
previously: >
    After restoring Jolly’s mobility by retrieving the servo motor from the carousel, you are now ready to begin the plan to infiltrate the Crystal Palace.
narrative: >
    With Jolly’s mobility restored, the two of you set out toward the <b>Crystal Palace</b>, where the Crystal of Joy is kept. Jolly explains that the palace’s defenses are strong, but there’s a way to weaken them. <i>“The first step is cutting off the palace’s power grid,”</i> Jolly says, as you move through the corrupted carnival. <i>“Without power, the barriers around the crystal will come down. We’ll have a short window to get inside.”</i>
    <br><br>
    The journey leads you to a rusted, hidden <b>control room</b> deep in the carnival, where the remnants of the palace’s power grid are displayed across a flickering console. <i>“The system’s corrupted,”</i> Jolly explains. <i>“We need to cut the power at <b>Node A</b>, but the time it takes for the power to actually shut down at <b>Node D</b> — the palace — doesn’t make sense anymore.”</i>
    <br><br>
    Jolly pulls up a map of the power grid, highlighting key nodes. <i>“It should take 30 minutes in total to shut off the defenses, but corruption has altered the flow. We need to figure out the real time, or we’ll miss our window.”</i>
    <br><br>
    You step forward, studying the grid and its complex connections. The answer lies in calculating how long the power will take to shut down once the switch is flipped.
    <br><br>
    Jolly’s eyes flicker with unease. <i>“This has to be precise. If we get it wrong, the palace’s defenses won’t fall, and we’ll be trapped out here — cut off from the Crystal of Joy with no way in.”</i>
objective: >
    Calculate the true time it will take for the palace's defenses to power down after cutting the main supply at Node A, using the corrupted power instructions as your guide.
outcome: >
    After carefully analyzing the power grid and calculating the true time it will take for the palace’s defenses to go down, you finally arrive at the correct answer. The corrupted system may have been tricky, but now you know exactly when the Crystal Palace will be vulnerable.
    <br><br>
    Jolly watches closely as you step back from the console, its expression serious. <i>"That’s it,"</i> Jolly says. <i>"We’ve got the time. Now we just need to be ready. Once the power goes down at the palace, we’ll have our window to act."</i>
    <br><br>
    You know the hardest part of the infiltration is still ahead, but with the timing locked in, the journey to reclaim the Crystal of Joy has taken one step forward.
---

Given the following instructions, determine how much time (in minutes) does it take for electricity to travel from **Node A** (Control Room) to **Node D** (Crystal Palace):

- Electricity takes **15 minutes** to travel from **Node A**, the first node of the chain, to **Node B**.
- It takes **5 minutes** to travel from **Node B** to **Node C**.
- It takes **10 minutes** to travel from **Node C** to the last node of the chain, **Node D**.
- The chain is a **straight line** with **no branches**.
- However, it does **not** take **30 minutes** anymore to travel from **Node A** to **Node D**.

<details>
 <summary>Hint 1</summary>
 Be flexible in your thinking and see if you can figure it out.
</details>

<details>
 <summary>Hint 2</summary>
 Node B must come after Node A, right? Well, maybe not. That's just the order of letters in the alphabet! 
</details>
