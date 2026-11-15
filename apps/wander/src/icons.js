// Canvas glyphs for landmark types — drawn at any size on the minimap,
// the big map, the compass and in the journal.

export const POI_ICONS = {
  lighthouse: { color: '#ffd25e', label: 'lighthouse' },
  shipwreck: { color: '#c98d5a', label: 'shipwreck' },
  windmill: { color: '#efe6cf', label: 'windmill' },
  ruinTower: { color: '#b5aea1', label: 'ruined tower' },
  stoneCircle: { color: '#8fd8c3', label: 'stone circle' },
  shrine: { color: '#9fd0ff', label: 'shrine' },
  arch: { color: '#d6c8a9', label: 'arch' },
  camp: { color: '#e0995e', label: 'camp' },
  gate: { color: '#9f7fe8', label: 'ancient gate' },
  cityTower: { color: '#b5c2d6', label: 'landmark tower' },
  park: { color: '#8fd8a3', label: 'city park' },
  monument: { color: '#ffd25e', label: 'monument' },
  neon: { color: '#e86fd6', label: 'neon district' },
};

export function drawPoiIcon(ctx, type, x, y, s) {
  const c = POI_ICONS[type]?.color ?? '#fff';
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = c;
  ctx.fillStyle = c;
  ctx.lineWidth = Math.max(1, s * 0.28);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  switch (type) {
    case 'lighthouse':
      ctx.beginPath();
      ctx.moveTo(-s * 0.45, s); ctx.lineTo(s * 0.45, s);
      ctx.lineTo(s * 0.18, -s * 0.5); ctx.lineTo(-s * 0.18, -s * 0.5);
      ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.arc(0, -s * 0.75, s * 0.3, 0, Math.PI * 2); ctx.fill();
      break;
    case 'windmill':
      for (let i = 0; i < 4; i++) {
        const a = Math.PI / 4 + (i * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
        ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(0, 0, s * 0.24, 0, Math.PI * 2); ctx.fill();
      break;
    case 'camp': // tent
      ctx.beginPath();
      ctx.moveTo(-s, s * 0.8); ctx.lineTo(0, -s * 0.8); ctx.lineTo(s, s * 0.8);
      ctx.closePath(); ctx.fill();
      break;
    case 'shipwreck':
      ctx.rotate(0.5);
      ctx.beginPath();
      ctx.moveTo(-s, -s * 0.1); ctx.lineTo(s, -s * 0.35);
      ctx.lineTo(s * 0.7, s * 0.5); ctx.lineTo(-s * 0.7, s * 0.5);
      ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(0, -s * 0.3); ctx.lineTo(0, -s); ctx.stroke();
      break;
    case 'ruinTower':
      ctx.fillRect(-s * 0.55, -s * 0.5, s * 1.1, s * 1.5);
      ctx.fillRect(-s * 0.55, -s, s * 0.26, s * 0.5);
      ctx.fillRect(s * 0.29, -s, s * 0.26, s * 0.5);
      break;
    case 'stoneCircle':
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(Math.cos(a) * s * 0.85, Math.sin(a) * s * 0.85, s * 0.22, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    case 'shrine':
      ctx.beginPath();
      ctx.moveTo(0, -s); ctx.lineTo(s * 0.7, 0); ctx.lineTo(0, s); ctx.lineTo(-s * 0.7, 0);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#08131c';
      ctx.beginPath(); ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2); ctx.fill();
      break;
    case 'arch':
      ctx.beginPath();
      ctx.arc(0, s * 0.55, s * 0.85, Math.PI, Math.PI * 2);
      ctx.stroke();
      ctx.fillRect(-s * 1.0, s * 0.4, s * 0.4, s * 0.6);
      ctx.fillRect(s * 0.6, s * 0.4, s * 0.4, s * 0.6);
      break;
    case 'gate':
      ctx.fillRect(-s, -s * 0.2, s * 0.55, s * 1.2);
      ctx.fillRect(s * 0.45, -s * 0.2, s * 0.55, s * 1.2);
      ctx.fillRect(-s, -s * 0.75, s * 2, s * 0.55);
      ctx.globalAlpha *= 0.85;
      ctx.beginPath();
      ctx.ellipse(0, s * 0.45, s * 0.42, s * 0.62, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha /= 0.85;
      break;
    case 'cityTower':
      ctx.fillRect(-s * 0.42, -s * 0.35, s * 0.84, s * 1.35);
      ctx.fillRect(-s * 0.24, -s * 0.9, s * 0.48, s * 0.55);
      ctx.beginPath();
      ctx.moveTo(0, -s * 1.1); ctx.lineTo(0, -s * 1.5);
      ctx.stroke();
      break;
    case 'park':
      ctx.beginPath();
      ctx.moveTo(0, -s); ctx.lineTo(s * 0.8, s * 0.85); ctx.lineTo(-s * 0.8, s * 0.85);
      ctx.closePath(); ctx.fill();
      ctx.fillRect(-s * 0.1, s * 0.5, s * 0.2, s * 0.5);
      break;
    case 'monument':
      ctx.beginPath();
      ctx.moveTo(0, -s); ctx.lineTo(s * 0.45, s * 0.7); ctx.lineTo(-s * 0.45, s * 0.7);
      ctx.closePath(); ctx.fill();
      ctx.fillRect(-s * 0.7, s * 0.7, s * 1.4, s * 0.3);
      ctx.beginPath(); ctx.arc(0, -s * 1.15, s * 0.22, 0, Math.PI * 2); ctx.fill();
      break;
    case 'neon':
      ctx.fillRect(-s, -s * 0.65, s * 2, s * 1.3);
      ctx.fillStyle = '#08131c';
      ctx.fillRect(-s * 0.8, -s * 0.45, s * 0.7, s * 0.9);
      ctx.fillRect(s * 0.1, -s * 0.45, s * 0.7, s * 0.9);
      break;
    default:
      ctx.beginPath(); ctx.arc(0, 0, s * 0.6, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}
