document.addEventListener('DOMContentLoaded', () => {
  fetch('http://192.168.1.192/dump1090/data/stats.json')
    .then(response => response.json())
    .then(data => {
      // Process data for charts
      const { last1min, last5min, last15min, total } = data;
      
      // Data preparation
      const timeLabels = ['Last 1 min', 'Last 5 min', 'Last 15 min', 'Total'];
      const samplesProcessed = [
        last1min.local.samples_processed,
        last5min.local.samples_processed,
        last15min.local.samples_processed,
        total.local.samples_processed
      ];
      const cprAirborne = [
        last1min.cpr.airborne,
        last5min.cpr.airborne,
        last15min.cpr.airborne,
        total.cpr.airborne
      ];
      const cpuDemod = [
        last1min.cpu.demod,
        last5min.cpu.demod,
        last15min.cpu.demod,
        total.cpu.demod
      ];
      const tracksAll = [
        last1min.tracks.all,
        last5min.tracks.all,
        last15min.tracks.all,
        total.tracks.all
      ];
      const messages = [
        last1min.messages,
        last5min.messages,
        last15min.messages,
        total.messages
      ];

      // Create charts
      createChart('samplesChart', 'Samples Processed', timeLabels, samplesProcessed);
      createChart('cprChart', 'CPR Airborne', timeLabels, cprAirborne);
      createChart('cpuChart', 'CPU Demod', timeLabels, cpuDemod);
      createChart('tracksChart', 'Tracks All', timeLabels, tracksAll);
      createChart('messagesChart', 'Messages', timeLabels, messages);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function createChart(canvasId, label, labels, data) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
