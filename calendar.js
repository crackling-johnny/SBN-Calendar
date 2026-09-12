document.addEventListener('DOMContentLoaded', function() {
    // 1. Find the calendar element from your HTML page
    var calendarEl = document.getElementById('calendar');

    // 2. Initialize FullCalendar with your settings
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Set the initial layout view (Options: dayGridMonth, timeGridWeek, timeGridDay, listMonth)
        initialView: 'dayGridMonth',
        
        // Structure the header buttons layout
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listMonth'
        },

        // Clean theme styling integration
        themeSystem: 'standard',

        // 3. Define your events array (Add, edit, or delete your events here!)
        events: [
            {
                title: 'Project Kickoff Meeting',
                start: '2026-09-15T10:00:00',
                end: '2026-09-15T11:30:00',
                color: '#2563eb' // Blue color code
            },
            {
                title: 'Code Freeze & Testing',
                start: '2026-09-18',
                end: '2026-09-21', // Multi-day events end on the day AFTER the last day
                color: '#dc2626' // Red color code
            },
            {
                title: 'Team Luncheon',
                start: '2026-09-24T12:00:00',
                allDay: false,
                color: '#16a34a' // Green color code
            }
        ],

        // 4. Interactive Click Handlers (Optional features)
        eventClick: function(info) {
            alert('Event: ' + info.event.title + '\nStarts: ' + info.event.start.toLocaleString());
            // You can replace this with custom modals or page redirects later
        }
    });

    // 5. Render the calendar onto the webpage
    calendar.render();
});
