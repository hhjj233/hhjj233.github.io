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
<div class="profile-intro">
  <p>I am a Ph.D. candidate in <a href="https://engineering.wisc.edu/departments/civil-environmental-engineering/">Civil and Environmental Engineering</a> at the <a href="https://www.wisc.edu/">University of Wisconsin–Madison</a> and a Research Assistant in the <a href="{{ cv.basics.labUrl }}">CATS Lab</a>.</p>
  <p>My research focuses on <strong>cooperative perception</strong>, <strong>vehicle-road-cloud systems</strong>, and <strong>AI for autonomous driving</strong>. I study how vehicles and infrastructure can share useful information, understand their surroundings, and support safer driving decisions.</p>
  <p>Previously, I received my master’s degree in Mechanical Engineering and bachelor’s degree in Vehicle Engineering from Tsinghua University.</p>
</div>

<section class="research-section" id="research" aria-labelledby="research-title">
  <h2 id="research-title">Research</h2>
  <p>I am interested in connecting perception with the decisions a vehicle needs to make. My recent work explores four complementary directions:</p>
  <ul class="research-directions">
    {% for interest in cv.interests %}
    <li><strong>{{ interest.name }}.</strong> {{ interest.description }}</li>
    {% endfor %}
  </ul>
</section>

<section class="news-section" id="news" aria-labelledby="news-title">
  <h2 id="news-title">Recent updates</h2>
  <ul class="news-list">
    {% assign news = cv.publications | where: 'news', true | sort: 'releaseDate' | reverse %}
    {% for publication in news limit: 4 %}
    <li>
      <time datetime="{{ publication.releaseDate | slice: 0, 7 }}">{{ publication.releaseDate | slice: 0, 7 | replace: '-', '.' }}</time>
      <div>{% if publication.status == 'Preprint' %}New preprint:{% else %}Published in <em>{{ publication.publisher }}</em>:{% endif %} <a href="{{ publication.website | escape }}">{{ publication.name }}</a>.</div>
    </li>
    {% endfor %}
  </ul>
</section>

<section aria-labelledby="selected-title">
  <div class="section-heading">
    <h2 id="selected-title">Selected publications</h2>
    <a href="{{ '/publications/' | relative_url }}">View all <span aria-hidden="true">→</span></a>
  </div>
  <p class="section-note">Selected journal articles, conference papers, preprints, and manuscripts.</p>
  {% assign featured = cv.publications | where: 'featured', true %}
  {% for publication in featured %}
    {% include publication-card.html publication=publication %}
  {% endfor %}
</section>

{% if cv.teaching.size > 0 %}
<section id="teaching" aria-labelledby="teaching-title">
  <h2 id="teaching-title">Teaching</h2>
  <ul class="news-list">
    {% for item in cv.teaching %}
    <li>
      <span class="news-term">{{ item.term }}</span>
      <div><strong>{{ item.course }}</strong>, {{ item.institution }}. <a href="{{ item.url | escape }}">{{ item.name }}</a>: {{ item.summary }}</div>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
