// Voice Functionality with Error Handling
function textSpeak() {
    const text = document.getElementById("txt").value;

    // Check if the input is empty
    if (!text.trim()) {
        alert("Please enter some text to convert to speech.");
        return;
    }

    // Speak the text
    responsiveVoice.speak(text, "UK English Male", {
        rate: 1,
        pitch: 1,
        volume: 1
    });
}

// Dynamic Voice List for Dropdown
function loadVoices() {
    const voiceSelect = document.getElementById("voice-select");
    const voices = responsiveVoice.getVoices();

    voices.forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });
}

// Load Voices on Page Load
window.onload = function () {
    loadVoices();
};
