---
layout: level
permalink: stories/christmas2024/act2/circuit-of-trust/
cover_img: stories/christmas2024/circuit-of-trust.webp
category: christmas2024
level: 8
title: "Day 8: Circuit of Trust"
previously: >
    Following a mysterious signal from a beeping radio, you decoded a message pointing to the Ferris wheel deep within the twisted carnival grounds. Navigating through the eerie festival, you reached the towering structure, where something — or someone — appears to be waiting for you in the shadows.
narrative: >
    The Ferris wheel towers above you, rusted and creaking, casting long shadows in the dim light. As you approach, the faint hum of machinery catches your ear. From behind a pile of debris, a pair of glowing eyes flicker to life, followed by a crackling voice.
    <br><br>
    <i>“Hey there! I didn’t think anyone would show up,”</i> the voice says, cheerful despite the distortion. A small, worn-out robot emerges from the shadows — its metallic body dented and rusted, with carnival insignia still visible under layers of grime.
    <br><br>
    <i>“I’m <b>Jolly</b>,”</i> the robot continues. <i>“I used to guide visitors and keep the carnival running. But, well... things haven’t exactly been cheerful around here for a while.”</i>
    <br><br>
    Jolly explains that it has been stuck in the broken-down Ferris wheel, barely functional, watching the corruption spread through the carnival. It has a plan to retrieve the <b>Crystal of Joy</b>, but its systems are too damaged to act on it. Suspicious of outsiders after years of isolation, Jolly hesitates before revealing the full plan.
    <br><br>
    <i>“There’s a <b>Power Core</b> in the old generator that could get me running again,”</i> Jolly says cautiously. <i>“But before I trust you with my plan, I need to know I can rely on you. Consider this a <b>test</b>. If you can help me restore my systems, we can talk about the rest.”</i>
    <br><br>
    Jolly needs a <b>Power Core</b> to restore its basic functionality, but it’s locked inside a corrupted generator deeper in the carnival grounds. You’ll need to navigate the decaying machinery and solve a logic puzzle to retrieve the core.
    <br><br>
    As you reach the central generator, you see the decayed remains of an access mechanism, with faint lights blinking on and off. The Power Core is stored behind a locked compartment, but the only way to access it is by activating a <b>mechanism</b> that will light up the control panel. This mechanism is tied to a series of circuits and gates that control the flow of power.
objective: >
    Retrieve the <b>Power Core</b> by solving the logic gate puzzle to reroute the power and light up the mechanism, unlocking the compartment. Return the Power Core to Jolly to restore its power.
outcome: >
    After solving the puzzle, the mechanism activates and the lamp flickers to life, indicating that the compartment has been unlocked. You retrieve the <b>Power Core</b> and return it to Jolly, who quickly installs the core, its systems whirring back to life.
    <br><br>
    <i>“Not bad! I’m back online, but I’m still stuck without a <b>servo motor</b> to move around. That’s hidden in the old <b>carousel</b>. If you can find it, we can finally put my plan into motion.”</i>
---

The Power Core is locked behind a security compartment within the generator, and the only way to access it is by rerouting the electrical current through a series of **logic gates** to activate a mechanism. Once the correct sequence is established, the mechanism will light up a **lamp**, signaling that the compartment has been unlocked.

The circuit board in front of you displays a series of interconnected **AND**, **OR**, **XOR**, and **NOT** gates, each affecting the flow of electricity. Your goal is to guide the power from the input through the logic gates in such a way that it activates the output lamp.

<div><img class="challenge-img" src="/assets/img/stories/christmas2024/logic-circuit.png"></div>

Instructions:
- You must manipulate the switches connected to the input so that the output result activates the lamp.
- **AND Gates** require both inputs to be active for the power to pass through.
- **OR Gates** allow power to pass if at least one input is active.
- **XOR Gates** allow power to pass only if one input is active, but not both. If both inputs are active, the power is blocked.
- **NOT Gates** invert the signal, meaning an inactive input becomes active and vice versa.
- The answer must contain the activation state of the switches from the top to the bottom, where `1` indicates **active** and `0` indicates **inactive**. An example of a possible answer (obviously wrong) could be `00011`.
- Note that there is more than one possible answer.

<details>
 <summary>Hint 1</summary>
 Start by focusing on the <b>end of the circuit</b> where the lamp is. Work backwards from there to figure out how the power needs to flow to reach the output.
</details>

<details>
 <summary>Hint 2</summary>
 The last two switches in the sequence are very direct and will help you narrow down the correct path. Pay close attention to those.
</details>

<details>
 <summary>Hint 3</summary>
 Be careful with the <b>XOR gates</b> — they require exactly one input to be active, so ensure you're sending only one signal through.
</details>
