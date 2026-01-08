function showSection(sectionId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
        }

        const text = "Welcome to My Pixelated Portfolio";
        const typingElement = document.getElementById('typing-text');
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        window.onload = function() {
            typeWriter();
        };

        function showFunFact() {
            const facts = [
                "I would love to fix cars and motorcycle in the future!",
                "Fixing things bring me closer to peace.",
                "I love coding then but now, I love fixing something!",
                "I can build simple games in Godot and Roblox!"
            ];
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById("fun-fact").textContent = randomFact;
        }