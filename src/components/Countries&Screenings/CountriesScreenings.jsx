'use client';
import { useState, useRef } from 'react';
import './CountriesScreenings.css';




/* ===== REAL CINEMA DATA ===== */
const countries = [
  {
    name: 'UAE',
    flag: '\uD83C\uDDE6\uD83C\uDDEA',
    region: 'middle-east',
    status: 'now-showing',
    cinemas: [
      {
        name: 'Cinemax Cinemas',
        theatre: 'Al Naeem Mall',
        city: 'Ras Al Khaimah',
        url: 'https://www.rakcinemax.com/movies/palestine-36-arabic/69',
      },
      {
        name: 'Vox Cinemas',
        theatre: 'Mall of the Emirates',
        city: 'Dubai',
        url: 'https://uae.voxcinemas.com/movies/palestine-36-arabic#showtimes',
      },
      {
        name: 'Vox Cinemas',
        theatre: 'Dubai Festival City',
        city: 'Dubai',
        url: 'https://uae.voxcinemas.com/movies/palestine-36-arabic#showtimes',
      },
      {
        name: 'Vox Cinemas',
        theatre: 'City Centre Mirdif',
        city: 'Dubai',
        url: 'https://uae.voxcinemas.com/movies/palestine-36-arabic#showtimes',
      },
      {
        name: 'Vox Cinemas',
        theatre: 'The Galleria - Al Maryah Island',
        city: 'Abu Dhabi',
        url: 'https://uae.voxcinemas.com/movies/palestine-36-arabic#showtimes',
      },
    ],
  },
  {
    name: 'Qatar',
    flag: '\uD83C\uDDF6\uD83C\uDDE6',
    region: 'middle-east',
    status: 'now-showing',
    cinemas: [
      {
        name: 'Novo Cinemas',
        theatre: 'The Pearl',
        city: 'Doha',
        url: 'https://qa.novocinemas.com/movies/10999/PALESTINE-36-ARABIC',
      },
    ],
  },
  {
    name: 'Jordan',
    flag: '\uD83C\uDDEF\uD83C\uDDF4',
    region: 'middle-east',
    status: 'now-showing',
    cinemas: [
      {
        name: 'Taj Cinemas',
        theatre: 'Taj Mall',
        city: 'Amman',
        url: 'https://tajcinemas.com/movies/873',
      },
      {
        name: 'Rainbow Theatre',
        theatre: 'Rainbow Theatre',
        city: 'Amman',
        url: 'https://www.therainbowtheater.com/events/343/Palestine-36(%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-36)---%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A7%D8%A1-6/1/2026-@7:00',
      },
    ],
  },
  {
    name: 'Lebanon',
    flag: '\uD83C\uDDF1\uD83C\uDDE7',
    region: 'middle-east',
    status: 'coming-soon',
    cinemas: [],
  },
  {
    name: 'France',
    flag: '\uD83C\uDDEB\uD83C\uDDF7',
    region: 'europe',
    status: 'now-showing',
    cinemas: [
      {
        name: 'IFFR',
        theatre: 'International Film Festival Rotterdam',
        city: 'Rotterdam',
        url: 'https://iffr.com/en/iffr/2026/films/palestine-36#vertoningen',
      },
    ],
  },
  {
    name: 'Chile',
    flag: '\uD83C\uDDE8\uD83C\uDDF1',
    region: 'americas',
    status: 'coming-soon',
    cinemas: [],
  },
];

const regions = {
  'all': 'All',
  'middle-east': 'Middle East',
  'europe': 'Europe',
  'americas': 'Americas',
};

export default function CountriesScreenings() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filteredCountries = countries.filter(
    (c) => activeRegion === 'all' || c.region === activeRegion
  );

  const handleRegionChange = (region) => {
    setActiveRegion(region);
    setExpanded(null);
  };

  return (
    <section className="sc-section" id="screenings">
      <div className="sc-header">
        <span className="sc-eyebrow">Now In Cinemas</span>
        <h2 className="sc-title">Countries &amp; Screenings</h2>
        <p className="sc-subtitle">
          Select your region and country to find where Palestine 36 is screening near you
        </p>
      </div>

      {/* Region Tabs */}
      <div className="sc-tabs">
        {Object.entries(regions).map(([key, label]) => (
          <button
            key={key}
            className={`sc-tab ${activeRegion === key ? 'sc-tab-active' : ''}`}
            onClick={() => handleRegionChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      {filteredCountries.length > 0 ? (
        <div className="sc-grid">
          {filteredCountries.map((country) => (
            <div key={country.name} className="sc-card-wrapper">
              <button
                className={`sc-card ${expanded === country.name ? 'sc-card-active' : ''} ${country.status === 'coming-soon' ? 'sc-card-soon' : ''}`}
                onClick={() =>
                  country.status !== 'coming-soon' &&
                  setExpanded(expanded === country.name ? null : country.name)
                }
              >
                <span className="sc-flag">{country.flag}</span>
                <span className="sc-name">{country.name}</span>
                <span className={`sc-status ${country.status}`}>
                  {country.status === 'now-showing'
                    ? 'Now Showing'
                    : 'Coming Soon'}
                </span>
                {country.status !== 'coming-soon' && (
                  <span
                    className={`sc-arrow ${expanded === country.name ? 'sc-arrow-open' : ''}`}
                  >
                    {'\u25BC'}
                  </span>
                )}
              </button>
              {expanded === country.name &&
                country.status !== 'coming-soon' && (
                  <div className="sc-expand">
                    {country.cinemas.map((c, i) => (
                      <a
                        key={c.name + '-' + c.theatre + '-' + i}
                        href={c.url}
                        className="sc-cinema"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="sc-cinema-info">
                          <span className="sc-cinema-name">{c.name}</span>
                          <span className="sc-cinema-theatre">{c.theatre}</span>
                        </div>
                        <span className="sc-cinema-city">{c.city}</span>
                        <span className="sc-cinema-link">
                          Book Now {'>'}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className="sc-empty">
          <span className="sc-empty-icon">&#127902;</span>
          <p className="sc-empty-text">Coming Soon to this region</p>
          <p className="sc-empty-sub">
            Screenings for this region will be announced shortly. Stay tuned.
          </p>
        </div>
      )}
    </section>
  );
}
