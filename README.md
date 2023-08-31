# auto-mate

# Procedure to remove all useless files in QA-Back :
1) Change your .gitignore with latest
2) In QA-Back, on your terminal :
   (--cached remove files only from Git's index, not from your filesystem)
    git rm --cached -r .vs/
    git rm --cached -r obj/
    git rm --cached -r Debug/
    git rm --cached -r net6.0/
    git rm --cached -r bin/
3) Add modifications, commit and pull them
   git add .gitignore
   git commit -m "Remove .vs and obj folders from Git tracking"
   git push
