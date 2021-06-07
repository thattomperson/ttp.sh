(async () => {
  const rows = $('.js-download-rows .row');
  const format = $('.js-file-type-select').val();
  const ext =
    format === 'Supplement' ? ` Supplement.zip` : `.${format.toLowerCase()}`;

  console.log(`Downloading ${format} format`);

  for (let index = 0; index < rows.length; index++) {
    const row = $(rows[index]);
    const filename = row.data('human-name') + ext;

    console.log(`Finding button for ${filename} (${index + 1}/${rows.length})`);
    const btn = row.find(`a:contains(${format})`);
    if (!btn.length) {
      continue;
    }

    const link = btn.attr('href');

    console.log(`Downloading ${filename} (${index + 1}/${rows.length})`);

    const blob = await fetch(link).then((res) => res.blob());

    const url = URL.createObjectURL(blob);

    console.log(`Saving ${filename} ${index + 1}/${rows.length}`);

    const a = document.createElement('a');
    a.setAttribute('download', filename);
    a.setAttribute('href', url);
    a.click();

    URL.revokeObjectURL(url);
  }
})();
