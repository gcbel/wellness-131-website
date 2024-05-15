document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meditation-form');
    const audioPlayer = document.getElementById('audio-player');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get selected length and type
        const length = document.getElementById('length').value;
        const type = document.getElementById('type').value;
        const audioRec = getAudio(length, type);

        // Display audio in the audio player section
        audioPlayer.innerHTML = `
            <p><em>${audioRec[0]}</em></p>
            <audio controls>
                <source src="${audioRec[1]}" type="audio/mpeg">
            </audio>
        `;
    });
});

function getAudio(length, type) {
    const audios = ['week-1-comp.m4a', 'week-1-mind.mp3', 'week-2-mind.m4a', 'week-3-loved.m4a', 'week-3-lovingkind.mp3', 'week-3-mind.mp3', 'week-4-self.m4a', 'week-5-tender.mp3', 'week-5-motivating.mp3', 'week-5-self.mp3', 'week-5-protect.mp3', 'week-6-comp-diff.m4a'];
    const messages = ['three minute compassion meditation with Dr. Sarah Meyer Tapia', 'five minute mindfulness meditation with Dr. Sarah Meyer Tapia', 'eleven minute mindful compassion meditation with Dr. Sarah Meyer Tapia', 'seven minute compassion for a loved one meditation with Dr. Sarah Meyer Tapia', 'thirteen minute lovingkindness meditation with Shauna Shapiro', 'thirteen minute mindfulness meditation with Shauna Shapiro', 'eight minute self-compassion in a difficult moment meditation with Dr. Sarah Meyer Tapia', 'four minute tender self-compassion meditation with Kristin Neff', 'seven minute motivating self-compassion meditation with Kristin Neff', 'five minute self-compassion meditation with Kristin Neff', 'eight minute protective self-compassion meditation with Kristin Neff', 'seventeen minute compassion for a difficult person with Dr. Sarah Meyer Tapia'];
    var premessage = 'Enjoy this ';
    var postmessage = '.';
    var index = 0;
    if (type==='mind') {
        if (length==='1') {
            var indexes = [1, 2, 5]
            var i = Math.floor(Math.random() * 3);
            index = indexes[i]
        } else if (length==='3') {
            index = 1;
        } else if (length==='5') {
            index = 2;
        } else if (length==='10') {
            index = 5
        }
    } else if (type==='self') {
        if (length==='1') {
            var indexes = [5, 6, 7, 8, 9, 10]
            var i = Math.floor(Math.random() * 6);
            index = indexes[i]
        } else if (length==='3') {
            var indexes = [7, 9]
            var i = Math.floor(Math.random() * 2);
            index = indexes[i]
        } else if (length==='5') {
            var indexes = [6, 8, 10]
            var i = Math.floor(Math.random() * 3);
            index = indexes[i];
        } else if (length==='10') {
            var indexes = [5, 6, 7, 8, 9, 10]
            var i = Math.floor(Math.random() * 6);
            index = indexes[i]
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        } 
    } else if (type==='others') {
        if (length==='1') {
            var indexes = [3, 11]
            var i = Math.floor(Math.random() * 2);
            index = indexes[i]
        } else if (length==='3') {
            var indexes = [3, 11]
            var i = Math.floor(Math.random() * 2);
            index = indexes[i]
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        } else if (length==='5') {
            index = 3;
        } else if (length==='10') {
            index = 11;
        }
    } else if (type==='loving') {
        index = 4
        if (length==='3' || length==='5') {
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='gen') {
        if (length==='1') {
            var indexes = [0, 2]
            var i = Math.floor(Math.random() * 2);
            index = indexes[i]
        } else if (length==='3') {
            index = 0;
        } else if (length==='10') {
            index = 2;
        } else {
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='any') {
        if (length==='1') {
            index = Math.floor(Math.random() * 11);
        } else if (length==='3') {
            var indexes = [0, 1, 7, 9]
            var i = Math.floor(Math.random() * 4);
            index = indexes[i]
        } else if (length==='5') {
            var indexes = [3, 6, 8, 10]
            var i = Math.floor(Math.random() * 4);
            index = indexes[i]
        } else if (length==='10') {
            var indexes = [2, 4, 5, 11]
            var i = Math.floor(Math.random() * 4);
            index = indexes[i]
        }
    }
    return [premessage + messages[index] + postmessage, audios[index]];
}

function openTab(tabName, event) {
    var i, tabContent, tabButtons;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}