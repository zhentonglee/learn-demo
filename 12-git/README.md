学习教程 https://learngitbranching.js.org/
git commit
git branch <your-branch-name> 创建分支
git checkout <your-branch-name> 切换分支
git checkout -b <your-branch-name> 创建一个新的分支同时切换到新创建 
git merge bugFix 把bugFix分支合并到当前分支
git rebase master 把bugFix分支合并到master
HEAD概念 git checkout ... HEAD就处在该处
git branch -f master HEAD~3 将 master 分支强制指向 HEAD 的第 3 级父提交
git reset HEAD~1 撤销本地
git revert HEAD 撤销远程
git cherry-pick c2 c4 （c2 c4）提交记录的哈希值
git rebase -i HEAD~4

git clone git fetch git pull
git pull是fetch和merge的缩写
git pull --rebase是fetch和rebase的缩写

如何快速的更新 master 分支并推送到远程：git pull --rebase;git push

git branch -u o/master foo 设置远程追踪分支

学习教程 https://www.yiibai.com/git/git-quick-start.html
git相关概念
已提交(committed)、已修改(modified)和已暂存(staged)。
已提交表示数据已经安全的保存在本地数据库中。 已修改表示修改了文件，但还没保存到数据库中。 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
工作目录、暂存区域以及 Git 仓库。
基本的 Git 工作流程如下：
在工作目录中修改文件。
暂存文件，将文件的快照放入暂存区域。
提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

git命令行：
git clone [url]
git clone [url] [rename] 重新命名本地项目名
git init 在现有目录中初始化仓库
git add . 添加进暂存区
git commit -m "something" 提交暂存区内容
git commit -a -m "something" 自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 git add 步骤
git status || git status -s || git status --short 查看哪些文件处于什么状态
git diff 本身只显示尚未暂存的改动，而不是自上次提交以来所做的所有改动
git diff --cached 查看已经暂存起来的变化
git rm 移除文件 -f 强制删除 --cached 让文件保留在磁盘，但是并不想让 Git 继续跟踪
git mv file_from file_to 对文件改名
git log 查看提交历史
git commit --amend 取消操作
git reset HEAD <file> 撤销暂存文件
git checkout -- <file>撤消对文件的修改
git remote 查看远程仓库 -v
git remote add <shortname> <url> 添加一个新的远程仓库
git fetch [remote-name] 从远程仓库中抓取与拉取，将数据拉取到本地仓库 - 它并不会自动合并或修改当前的工作
git push origin master 推送到远程仓库
git stash 要切换分支，但不想提交一直在做的工作，那么可以把当前工作的改变隐藏起来
git stash list 查看
git stach pop 删除并恢复

学习教程（五星推荐） https://www.liaoxuefeng.com/wiki/896043488029600
版本回退
git log
git reset --hard HEAD^ 回退到上一版本 （这是有条件的，就是你还没有把自己的本地版本库推送到远程）
git reset --hard HEAD~5 回退到上5版本
git reset --hard commit_id 回退到特定版本
git reflog 查看命令历史，以便确定要回到未来的哪个版本
工作区和暂存区
工作区（Working Directory）：本地电脑看到的目录
版本库（Repository）：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库，其中包含stage，也就是暂存区

Git跟踪并管理的是修改，而非文件
撤销修改
git checkout -- file 可以丢弃工作区的修改
git reset HEAD file 可以把暂存区的修改撤销掉（unstage），重新放回工作区
删除文件
git rm file 从版本库中删除该文件，并且git commit
ps：先手动删除文件，然后使用git rm <file>和git add<file>效果是一样的
git checkout -- file 另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本
ps：从来没有被添加到版本库就被删除的文件，是无法恢复的
添加远程库
git remote add origin <url> 关联远程仓库
git push -u origin master 本地库的所有内容推送到远程库，第一次推送master分支时，加上-u参数，把本地的master分支和远程的master分支关联起来
从远程库克隆
git clone <url>
创建与合并分支
git checkout -b dev 创建dev分支，然后切换到dev分支
git branch 查看当前分支
git branch <name> 创建分支
git merge <name> 合并某分支到当前分支
git branch -d <name> 删除分支
git log --graph 查看分支合并图
git merge --no-ff -m "merge with no-ff" dev 强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，因此从分支历史上就可以看出分支信息
合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并
Bug分支
git stash 场景：工作到一半，需要切换分支，但是还不能提交，先当前工作现场“储藏”起来，等以后恢复现场后继续工作
git stash list 查看储存内容
git stash pop 恢复的同时把stash内容也删除
git cherry-pick commit_id 复制一个特定的提交到当前分支
多人协作
git remote -v 如果没有推送权限，就看不到push的地址
多人协作的工作模式通常是这样：
首先，可以试图用git push origin <branch-name>推送自己的修改；
如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；
如果合并有冲突，则解决冲突，并在本地提交；
没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！
查看远程库信息，使用git remote -v；
本地新建的分支如果不推送到远程，对其他人就是不可见的；
从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；
在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；
建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；
从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。
rebase
rebase操作可以把本地未push的分叉提交历史整理成直线；
rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。
创建标签
git tag <name> 创建标签
git tag 查看标签
git tag <name> commit_id 在某个提交创建标签
git show <tagname> 查看标签信息
git tag -a <tagname> -m "something" commit_id 创建带有说明的标签，用-a指定标签名，-m指定说明文字
操作标签
git tag -d <tagname> 删除本地标签
git push origin <tagname> 推送某个标签到远程
删除远程标签
git tag -d <tagname> 先删除本地
git push origin :refs/tags/<tagname> 再推送远程