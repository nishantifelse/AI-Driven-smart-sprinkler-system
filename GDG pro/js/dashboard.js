// Simple function to update data values
function updateData() {
  // Update temperature with slight variations
  const baseTemp = 76;
  const newTemp = baseTemp + (Math.random() * 4 - 2);
  document.getElementById('temperature').textContent = `${Math.round(newTemp)}°F`;
  
  // Update humidity
  const baseHumidity = 45;
  const newHumidity = baseHumidity + (Math.random() * 6 - 3);
  document.getElementById('humidity').textContent = `${Math.round(newHumidity)}%`;
  
  // Update wind speed
  const baseWindSpeed = 8;
  const newWindSpeed = baseWindSpeed + (Math.random() * 4 - 2);
  document.getElementById('wind-speed').textContent = `${Math.round(newWindSpeed)} mph`;
  
  // Update soil moisture values
  updateMoistureValue('front-moisture', 65);
  updateMoistureValue('back-moisture', 42);
  updateMoistureValue('garden-moisture', 78);
  updateMoistureValue('side-moisture', 53);
  
  // Update last updated time
  const now = new Date();
  const timeString = now.toLocaleString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
  });
  document.getElementById('update-time').textContent = timeString;
  
  // Schedule next update
  setTimeout(updateData, 10000);
}

function updateMoistureValue(elementId, baseValue) {
  const change = Math.floor(Math.random() * 5) - 2; // -2 to +2 change
  let newValue = baseValue + change;
  
  // Keep within reasonable bounds
  newValue = Math.max(10, Math.min(95, newValue));
  
  document.getElementById(elementId).textContent = `${newValue}%`;
}

// Start data updates when page loads
window.onload = function() {
  updateData();
};