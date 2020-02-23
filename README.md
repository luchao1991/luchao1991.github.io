# luchao1991.github.io
personal page

To create the `academic-kickstart` repository, [**fork**](https://github.com/sourcethemes/academic-kickstart#fork-destination-box) the *Academic Kickstart* repository and clone your fork with Git (download it to your computer) by replacing `` in the following command with your Github username:

```
git clone https://github.com/<USERNAME>/academic-kickstart.git My_Website
cd My_Website
git submodule update --init --recursive
```

In your `config.toml` file, set `baseurl = "https://.github.io/"`, where `` is your Github username. Stop Hugo if it’s running and delete the `public`directory if it exists (by typing `rm -r public/`).

Add your *.github.io* repository into a submodule in a folder named *public*, replacing with your Github username:

```
git submodule add -f -b master https://github.com/<USERNAME>/<USERNAME>.github.io.git public
```

Add everything to your local git repository and push it up to your remote repository on GitHub:

```
git add .
git commit -m "Initial commit"
git push -u origin master
```

Whilst running the above commands you may be prompted for your Github username and password.

Next, **regenerate** your website’s HTML code by running Hugo and uploading the *public* submodule to GitHub:

```
hugo
cd public
git add .
git commit -m "Build website"
git push origin master
cd ..
```

Once Git has finished uploading your site to Github, you can open your new `https://.github.io` website in your browser, substituting with your Github username.