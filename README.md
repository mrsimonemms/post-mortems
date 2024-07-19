# post-mortems

Post-mortem documents to learn lessons from our incidents

<!-- toc -->

* [What is a post-mortem?](#what-is-a-post-mortem)
  * [Guiding principles](#guiding-principles)
    * [Open](#open)
    * [Blameless](#blameless)
    * [Constructive](#constructive)
* [Contributing](#contributing)
  * [Open in a container](#open-in-a-container)
  * [Commit style](#commit-style)

<!-- Regenerate with "pre-commit run -a markdown-toc" -->

<!-- tocstop -->

## What is a post-mortem?

Our software will break. The only way to write truly secure and reliable applications
is to write [no code](https://github.com/kelseyhightower/nocode/).

We must learn from our mistakes so that these issues don't cascade.

### Guiding principles

> For more information on the subject, see the [Google SRE book](https://sre.google/sre-book/postmortem-culture/)

In order to be effective, our post-mortems must be:

* open
* blameless
* constructive

#### Open

The software we make for our customers is not built in isolation. No one person
knows everything about everything we build, so we cannot expect to solve all problems
by working in isolation.

Trust is fostered by honesty. This repository is open to all.

#### Blameless

An atmosphere of blame leads to a culture where problems are ignored.

If we feel like we're blamed for a problem, we get fearful for our jobs. Problems
that are easily solvable become magnified because we will be blamed. Oftentimes,
by apportioning blame we miss the root cause and the opportunity of preventing the
problem from recurring.

In its simplest form, Person A may have done something wrong, but they were only
able to make that mistake because of the systems in place that led to them being
able to make a mistake. By punishing Person A, it doesn't solve the root cause
and failure to solve the root cause means that the identity of Person A becomes
pot luck.

> If we have a bad pit stop, it's not because the mechanic has just underperformed,
> it's because his equipment is not up to the job or the training hasn't been good
> enough or our wheel nuts are not how they should be.
>
> [Toto Wolff, Team Principal, Mercedes F1](https://www.planetf1.com/news/toto-wolff-mercedes-no-blame-culture-status/)

When looked at like this, we achieve nothing when we blame the person. We are still
relying on luck to avoid a repetition of the problem.

#### Constructive

We commit that our post-mortems have actions and that we will complete them. Our
actions will be assigned an owner who is responsible for ensuring that the action
is completed with a set time.

## Contributing

To create a new incident, run `make new-incident` and follow the instructions.

### Open in a container

* [Open in a container](https://code.visualstudio.com/docs/devcontainers/containers)

### Commit style

All commits must be done in the [Conventional Commit](https://www.conventionalcommits.org)
format.

```git
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
