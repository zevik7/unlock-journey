---
title: Git
description: Git commands and work flow.
---

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
>
> [git-scm](https://git-scm.com/)

<video width="400" autoPlay loop>
  <source src="/video/git.mp4" type="video/mp4" />
</video>

## Essential commands

### git status

### git add

### git commit

### git push

### git pull

### git fetch

### git merge

### git rebase

### git branch

### git checkout

### git stash

### git reset

### git log

## Recover from git reset --hard 😱

```bash
git reflog show

# X is the number showed in `reflog` output.
git reset HEAD@{X}
```

## How to contribute to this project

This is also the way to contribute to every Open Source projects on GitHub.

1. Fork this repository https://github.com/mikunpham/unlock-journey

2. Clone forked repository to your local machine

   ```bash
   git clone git@github.com:your_username/unlock-journey.git
   ```

3. Add the original repository as `upstream` and fetch the latest changes

   ```bash
   git remote add upstream git@github.com:mikunpham/unlock-journey.git
   git fetch upstream
   ```

4. Right now, your local `main` is pointing to your personal repository which is called `origin`. Let change it to point to the `upstream` repository, so whenever you pull changes into `main`, it will get the latest changes from the upstream repository.

   ```bash
   git branch -u upstream/main main
   ```

## Best practices

- Write good commit messages.
- Small and focused commits.
- Clean up commit history.
- Keep feature branches short-lived.

## Tips

- Use `git config --get-regexp user` to show your git information.

- Use this command to create `git lg` alias for better logging view.

  ```bash
  git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
  ```
