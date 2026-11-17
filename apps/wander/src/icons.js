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

// ---------------------------------------------------------------------------
// SVG set: the same landmark glyphs as above, drawn as 24×24 vector paths for
// the DOM (journal badges, map tooltips, panels), plus a few UI glyphs. Fill
// uses currentColor, so a parent's `color` (or the type's own colour) tints them.

const P = {
  lighthouse: '<path d="M8.4 21 10 9.5h4L15.6 21z"/><rect x="9.2" y="5.2" width="5.6" height="3.4" rx=".8"/><path d="M12 2.2l3 2.4H9z"/><path d="M3 6h4M17 6h4M3.6 3.4l3 1.4M20.4 3.4l-3 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  shipwreck: '<path d="M2.6 13.4 21 10.2l-2.6 7.6H6z"/><path d="M12.2 12V3.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12.8 4.2l5 5.2h-5z" opacity=".8"/>',
  windmill: '<path d="M10 14.4h4L15.4 22H8.6z"/><circle cx="12" cy="11.6" r="1.7"/><path d="M12 11.6 5.6 5.2M12 11.6l6.4-6.4M12 11.6l6.4 6.4M12 11.6 5.6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  ruinTower: '<path d="M6.5 22V8h3.2v3h4.6V8h3.2v14z"/><path d="M6.5 8h3.2V5H6.5zM14.3 8h3.2V5h-3.2z" opacity=".75"/>',
  stoneCircle: '<circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="4.6" r="2"/><circle cx="18.4" cy="8.3" r="2"/><circle cx="18.4" cy="15.7" r="2"/><circle cx="12" cy="19.4" r="2"/><circle cx="5.6" cy="15.7" r="2"/><circle cx="5.6" cy="8.3" r="2"/>',
  shrine: '<path fill-rule="evenodd" d="M12 2.4 18.4 12 12 21.6 5.6 12zM12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z"/>',
  arch: '<path d="M3.2 22V13a8.8 8.8 0 0 1 17.6 0v9h-5v-9a3.8 3.8 0 0 0-7.6 0v9z"/>',
  camp: '<path d="M2.4 20.6 12 3.6l9.6 17z"/><path d="M12 20.6l-3-6.4h6z" fill="#08131c" opacity=".7"/>',
  gate: '<path d="M3.4 22V9h4v13zM16.6 22V9h4v13zM2.4 9V5.4h19.2V9z"/><ellipse cx="12" cy="16" rx="3.6" ry="5.4" opacity=".7"/>',
  cityTower: '<path d="M7.6 22V9.6h8.8V22z"/><path d="M9.8 9.6V5h4.4v4.6z"/><path d="M12 5V1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  park: '<path d="M12 2.6 19.6 16H4.4z"/><path d="M10.9 15.5h2.2V22h-2.2z"/>',
  monument: '<path d="M12 4 15.4 18H8.6z"/><path d="M5.4 18h13.2v3H5.4z"/><circle cx="12" cy="2.6" r="1.6"/>',
  neon: '<path fill-rule="evenodd" d="M2.4 5.6h19.2v12.8H2.4zM5 8v8h6V8zM13 8v8h6V8z"/>',
  // UI glyphs
  camera: '<path fill-rule="evenodd" d="M3 7.6h3.4l1.4-2.4h8.4l1.4 2.4H21v11.8H3zM12 9.4a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z"/>',
  gear: '<path fill-rule="evenodd" d="M10.3 2.6h3.4l.5 2.5 1.6.7 2.1-1.4 2.4 2.4-1.4 2.1.7 1.6 2.5.5v3.4l-2.5.5-.7 1.6 1.4 2.1-2.4 2.4-2.1-1.4-1.6.7-.5 2.5h-3.4l-.5-2.5-1.6-.7-2.1 1.4-2.4-2.4 1.4-2.1-.7-1.6-2.5-.5v-3.4l2.5-.5.7-1.6-1.4-2.1 2.4-2.4 2.1 1.4 1.6-.7zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/>',
  map: '<path d="M3 5.8 9 3.6l6 2.2 6-2.2v14.6l-6 2.2-6-2.2-6 2.2z" opacity=".9"/><path d="M9 3.6v14.6M15 5.8v14.6" fill="none" stroke="#08131c" stroke-width="1" opacity=".5"/>',
  journal: '<path d="M5 3.4h12.4A1.6 1.6 0 0 1 19 5v15.6H7A2 2 0 0 1 5 18.6z"/><path d="M8.4 8h7M8.4 11.4h7" fill="none" stroke="#08131c" stroke-width="1.2" opacity=".55" stroke-linecap="round"/>',
  gamepad: '<path d="M7.6 6.4h8.8c2.6 0 4.2 2 4.8 5.6l.6 4.2c.3 2-1.5 3-2.8 1.8L16.8 16H7.2L4.6 18c-1.3 1.2-3.1.2-2.8-1.8l.6-4.2c.6-3.6 2.2-5.6 5.2-5.6z"/>',
};

export function svgIcon(type, size = 20, color = null) {
  const body = P[type];
  if (!body) return '';
  const c = color || POI_ICONS[type]?.color || 'currentColor';
  return `<svg class="ico" viewBox="0 0 24 24" width="${size}" height="${size}" fill="${c}" style="color:${c}" aria-hidden="true">${body}</svg>`;
}
