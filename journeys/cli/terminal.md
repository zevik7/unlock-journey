---
title: Terminal
description: Some basic commands on Terminal.
---

# Terminal

The terminal is a text interface for executing text-based programs. If you're running any tooling for web development there's a near-guaranteed chance that you'll have to pop open the command line and run some commands to use your chosen tools.

### Print

```bash
echo "hello world"
# output: hello world

# display current working directory
pwd
# output: /Users/username
```

### List

```bash
ls

ls -la
```

### Change directory

```bash
cd /path

# go to parent directory and go to `new_folder` directory
cd ../new_folder
```

### Create

```bash
# create directory
mkdir directory_name

# create file
touch file_name.txt
```

### Delete

```bash
# delete directory
rm -r directory_name

# delete file
rm file_name.txt
```

### Move or Copy

```bash
# move
mv file.txt /new/path/file.txt

# copy
cp file.txt /new/path/file.txt
```

### View file

```bash
cat file.txt
```

### Modify permissions

Reference: https://www.howtogeek.com/437958/how-to-use-the-chmod-command-on-linux

```bash
ls -l file.sh
# Output:
# -rw-r--r--  file.sh

chmod +x file.sh

chmod 666 file.sh
```

Numerical shorthand permissions:

- 0: (000) No permission.
- 1: (001) Execute permission.
- 2: (010) Write permission.
- 3: (011) Write and execute permissions.
- 4: (100) Read permission.
- 5: (101) Read and execute permissions.
- 6: (110) Read and write permissions.
- 7: (111) Read, write, and execute permissions.

### Execute commands with superuser privileges

**sudo** use our account and password to execute system commands with root privileges.

```bash
sudo rm -r directory_cannot_be_deleted_normally

sudo cat file_with_root_privileges.txt
```
