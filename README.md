# Resident Raver - ImpactJS Game Experiment

## 📖 Project Overview
**Resident Raver** is a 2D side-scrolling platformer game developed using the **ImpactJS** game engine. [cite_start]The player controls an unnamed hero trying to escape a college dorm overrun by zombies[cite: 225].
This project was built as part of an assignment to demonstrate game design fundamentals, entity management, collision detection, and level design using the Weltmeister editor.
---
## 🎮 Gameplay Features
* [cite_start]**Platforming Mechanics:** Smooth physics-based movement including running, jumping, and falling[cite: 670, 803].
* **Combat System:**
    * [cite_start]**Gun:** Fires high-velocity bullets that travel in a straight line[cite: 1061].
    * [cite_start]**Grenades:** projectile weapons that bounce off walls and explode on impact or after a set timer[cite: 1122, 1144].
    * [cite_start]**Weapon Switching:** Toggle between weapons dynamically[cite: 1181].
* [cite_start]**Enemy AI:** Zombies patrol platforms, turn around at edges, and react to collisions with walls[cite: 889, 904].
* **Health & Damage:**
    * [cite_start]Entity-based collision detection (Player vs. Zombie)[cite: 934].
    * [cite_start]Invincibility frames for the player after taking damage or respawning[cite: 1286].
    * [cite_start]Particle explosion effects for death animations and impact hits[cite: 1328].
* [cite_start]**Level Progression:** Trigger entities (`LevelExit`) that load the next stage when the player reaches the exit[cite: 1532].
---
## 🕹️ Controls
| Key | Action |
| :--- | :--- |
| **Left Arrow** | [cite_start]Move Left [cite: 587] |
| **Right Arrow** | [cite_start]Move Right [cite: 587] |
| **X** | [cite_start]Jump [cite: 588] |
| **C** | [cite_start]Shoot / Attack [cite: 589] |
| **Tab** | [cite_start]Switch Weapon (Gun/Grenade) [cite: 1183] |
---
## 📂 Project Structure
* [cite_start]**`lib/game/main.js`**: Core game logic, camera tracking, and input bindings[cite: 451].
* **`lib/game/entities/`**:
    * [cite_start]`player.js`: Handles player physics, animations, and inner classes for weapons (Bullet/Grenade)[cite: 607, 1035].
    * [cite_start]`zombie.js`: Handles enemy AI and damage logic[cite: 822].
    * [cite_start]`levelexit.js`: Trigger entity for loading new levels[cite: 1534].
* [cite_start]**`lib/game/levels/`**: Contains the JSON map data for `dorm1.js` and `dorm2.js`[cite: 397].
* [cite_start]**`media/`**: Game assets including spritesheets (`player.png`, `zombie.png`, `tiles.png`)[cite: 230].
---
## 🚀 How to Run
1.  Clone this repository.
2.  Ensure you have a local web server running (e.g., MAMP, XAMPP, or Python's `SimpleHTTPServer`). ImpactJS requires a server environment to load resources correctly due to browser security policies.
3.  Navigate to `http://localhost:8888/Resident-Raver-Assignment/` (or your specific port) in your web browser.

## 🛠️ Tools Used
* **ImpactJS**: HTML5 Game Engine.
* [cite_start]**Weltmeister**: The level editor used to paint tiles and place entities[cite: 256].

---
