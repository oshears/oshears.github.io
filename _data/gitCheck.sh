git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config user.name "github-actions[bot]"
git add timeline_data.yml
git add test_timeline.xlsx
if git commit -m "updated timeline_data.yml and test_timeline.xlsx" ; then
    git push
    echo "git add succeeded!"
else
    echo "git add failed!"
fi
