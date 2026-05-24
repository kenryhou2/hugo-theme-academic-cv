# Embedding WakaTime Profile Stats

This site should only embed public WakaTime profile assets or public share URLs. Do not place a WakaTime API key in Hugo content, data files, front matter, JavaScript, or generated static files.

## Option 1: Public Share Image

1. Open WakaTime and go to profile or stats sharing settings.
2. Enable the public profile or the specific shareable chart you want to show.
3. Copy the public image, SVG, or badge URL that WakaTime provides.
4. Add that URL to a Hugo data file, for example `data/code_stats.yaml`, and render it in the `code-stats-dashboard` block as an image.

Example data shape:

```yaml
wakatime:
  profile_url: "https://wakatime.com/@your-username"
  stats_image_url: "https://wakatime.com/share/@your-username/example.svg"
  stats_image_alt: "WakaTime coding activity profile stats"
```

Example template snippet:

```go-html-template
{{ with site.Data.code_stats.wakatime }}
  {{ $alt := .stats_image_alt | default "WakaTime coding activity stats" }}
  <a href="{{ .profile_url }}" rel="noopener noreferrer" target="_blank">
    <img src="{{ .stats_image_url }}" alt="{{ $alt }}">
  </a>
{{ end }}
```

## Option 2: Public Profile Link

If the chart should stay outside the page, add a link to the public WakaTime profile from the code stats dashboard:

```yaml
wakatime:
  profile_url: "https://wakatime.com/@your-username"
  link_label: "View WakaTime profile"
```

This keeps the portfolio static and avoids relying on client-side API calls.

## Do Not Embed Private API Calls

Avoid browser-side requests to WakaTime's authenticated API. Static GitHub Pages output is public, so any token used by client JavaScript is exposed. If private API data is needed later, fetch it in a local or CI build step, write a sanitized JSON/YAML snapshot, and commit only the generated public-safe summary.
