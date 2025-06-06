(() => {
  const name = window.featureConfigs.customUsername;
  const pfp = window.featureConfigs.customPfp;

  const profileName = document.querySelector('[data-test="user-nickname"]');
  const profileImg = document.querySelector('[data-test="user-avatar"]');

  if (profileName && name) profileName.textContent = name;
  if (profileImg && pfp) profileImg.src = pfp;
})();
