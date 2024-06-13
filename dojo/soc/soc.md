# Separation of Concerns (SoC):

## Why?

Easier to understand, apply, correct, and extend code units with clear tasks.
Enhances adaptability, correctness, production efficiency, and continuous improvement.

## Principle:

Don't combine multiple concerns in one entity (function/class).
Concerns are completely different purposes or functionalities, orthogonal to each other and the main functionality.
Examples: tracing, logging, transactional behavior, caching.
Concerns should be outsourced to specialized function units.

## Relation to Single Responsibility Principle:

Concerns are a superset of responsibilities.
Ideally, a responsibility consists of one concern (core functionality).
Often, multiple concerns are mixed within a responsibility.
The principle dictates that concerns should be clearly separated and grouped.

## Domain Driven Design:

Strict separation of business domain and infrastructure.
Business domain classes should not contain infrastructure-related code, focusing solely on business logic.
Persistence is a separate concern from business logic.
