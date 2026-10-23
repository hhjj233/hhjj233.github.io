---
layout: academic
permalink: /
title: "Cooperative perception for safer autonomous driving"
home: true
author_profile: true
excerpt: "Jiaxi (Jay) Liu, Ph.D. candidate in Civil and Environmental Engineering at UW–Madison. Research on cooperative perception, connected transportation, and AI for autonomous driving."
redirect_from:
  - /about/
  - /about.html
---
{% assign cv = site.data.cv %}
<section class="content-section bio-section" id="about" aria-labelledby="about-title">
  <h2 class="sr-only" id="about-title">About</h2>
  <p class="bio-lead">I study how vehicles and infrastructure can share useful information, understand their surroundings, and support safer driving decisions.</p>
  <p>I am a Ph.D. candidate in <a href="https://engineering.wisc.edu/departments/civil-environmental-engineering/">Civil and Environmental Engineering</a> at the <a href="https://www.wisc.edu/">University of Wisconsin–Madison</a> and a Research Assistant in the <a href="{{ cv.basics.labUrl }}">CATS Lab</a>. My research focuses on <strong>cooperative perception</strong>, <strong>vehicle-road-cloud systems</strong>, and <strong>AI for autonomous driving</strong>.</p>
  <p>Previously, I received my master’s degree in Mechanical Engineering and bachelor’s degree in Vehicle Engineering from Tsinghua University.</p>
</section>

<section class="content-section" id="research" aria-labelledby="research-title">
  <h2 id="research-title">Research</h2>
  <p class="section-intro">I am interested in connecting perception with the decisions a vehicle needs to make. My recent work explores four complementary directions:</p>
  <div class="research-grid">
    {% for interest in cv.interests %}
    <article class="research-card">
      <h3><a class="research-topic-link" href="#publications" data-topic-link="{{ interest.id }}">{{ interest.name }}</a></h3>
      <p>{{ interest.description }}</p>
      <p class="representative-work"><strong>Examples:</strong>
        {% for example_id in interest.examples %}{% assign example = cv.publications | where: 'id', example_id | first %}
        <span class="representative-example"><a href="{{ example.project | default: example.website | escape }}">{{ example.shortName }}</a>: {{ example.summary | slice: 0 | downcase }}{{ example.summary | slice: 1, 1000 }}</span>
        {% endfor %}
      </p>
    </article>
    {% endfor %}
  </div>
</section>

<section class="content-section" id="news" aria-labelledby="news-title">
  <h2 id="news-title">News &amp; updates</h2>
  <ul class="news-list">
    {% comment %}Merge standalone news with paper news as "date§item" strings, then sort them by date.{% endcomment %}
    {% assign news_items = '' | split: '' %}
    {% for item in cv.news %}
      {% capture link %}<a href="{{ item.url | escape }}">{{ item.linkText }}</a>{% endcapture %}
      {% capture entry %}{{ item.date }}§<li><span class="news-date">[{{ item.date | slice: 0, 7 | replace: '-', '.' }}]</span> {% if item.url %}{{ item.text | replace: item.linkText, link }}{% else %}{{ item.text }}{% endif %}</li>{% endcapture %}
      {% assign news_items = news_items | push: entry %}
    {% endfor %}
    {% assign paper_news = cv.publications | where: 'news', true %}
    {% for publication in paper_news %}
      {% capture entry %}{{ publication.releaseDate }}§<li><span class="news-date">[{{ publication.releaseDate | slice: 0, 7 | replace: '-', '.' }}]</span> {% if publication.status == 'Preprint' %}New preprint:{% else %}Published in <em>{{ publication.publisher }}</em>:{% endif %} <a href="{{ publication.website | escape }}">{{ publication.name }}</a>.</li>{% endcapture %}
      {% assign news_items = news_items | push: entry %}
    {% endfor %}
    {% assign news_items = news_items | sort | reverse %}
    {% for entry in news_items limit: 5 %}{{ entry | split: '§' | last }}{% endfor %}
  </ul>
</section>

<section class="content-section" id="publications" aria-labelledby="publications-title">
  {% assign featured = cv.publications | where: 'featured', true %}
  {% assign by_date = cv.publications | sort: 'releaseDate' | reverse %}
  <div class="publications-title-row">
    <h2 id="publications-title">Publications</h2>
    <div class="view-switch" role="group" aria-label="Publication view" data-js-only>
      <button type="button" class="active" aria-pressed="true" data-view="selected">Selected</button>
      <button type="button" aria-pressed="false" data-view="all">All publications</button>
    </div>
  </div>
  <div class="publication-filter-panel" data-js-only>
    <div class="topic-line" role="group" aria-label="Filter publications by topic">
      <strong>Topics:</strong>
      <button type="button" class="active" aria-pressed="true" data-topic="all">All</button>
      {% for interest in cv.interests %}<button type="button" aria-pressed="false" data-topic="{{ interest.id }}">{{ interest.label }}</button>{% endfor %}
    </div>
    <p class="archive-status" aria-live="polite" data-publication-status>Showing {{ featured.size }} of {{ featured.size }} selected publications</p>
  </div>
  <noscript><p class="noscript-note">Selected publications are shown below. The <a href="{{ '/publications/' | relative_url }}">publications page</a> lists all of them.</p></noscript>
  <div class="publication-list" data-publication-list>
    {% for publication in featured %}
      {% assign featured_rank = forloop.index0 %}
      {% for item in by_date %}{% if item.id == publication.id %}{% assign date_rank = forloop.index0 %}{% endif %}{% endfor %}
      {% include publication-card.html publication=publication featured_rank=featured_rank date_rank=date_rank %}
    {% endfor %}
    {% for publication in by_date %}{% unless publication.featured %}
      {% include publication-card.html publication=publication featured_rank=99 date_rank=forloop.index0 hidden=true %}
    {% endunless %}{% endfor %}
  </div>
  <p class="publication-footnote"><a href="{{ '/publications/' | relative_url }}">Publications grouped by type</a> · <a href="{{ site.author.googlescholar | escape }}">Google Scholar</a></p>
</section>

{% if cv.teaching.size > 0 %}
<section class="content-section" id="teaching" aria-labelledby="teaching-title">
  <h2 id="teaching-title">Teaching</h2>
  <ul class="news-list teaching-list">
    {% for item in cv.teaching %}
    <li><span class="news-date">[{{ item.term }}]</span> <strong>{{ item.course }}</strong>{% if item.institution != cv.basics.institution %}, {{ item.institution }}{% endif %} · {{ item.role }}.{% if item.url %} <a href="{{ item.url | escape }}">{{ item.name }}</a>: {{ item.summary }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>
{% endif %}
