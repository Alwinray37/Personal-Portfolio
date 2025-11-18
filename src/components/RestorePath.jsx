// src/RestorePath.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * When GitHub Pages serves 404.html for /some/deep/link,
 * 404.html stores the intended path and redirects to '/',
 * then this component reads that value and navigates to it.
 */
export default function RestorePath() {
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem('__gh_pages_spa_path__');
    if (stored) {
      sessionStorage.removeItem('__gh_pages_spa_path__');
      navigate(stored, { replace: true });
    }
  }, [navigate]);

  return null;
}
