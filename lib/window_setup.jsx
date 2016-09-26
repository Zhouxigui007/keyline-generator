var w = new Window ('dialog', 'Bleed', [0, 0, 360, 160], {closeButton: false}),
    bleedInfo = w.add ('group', [0,0,280,150]),
    bleedSizePanel = bleedInfo.add('panel', [10,10,280,150], 'Bleed'),
    widthBleedInput = bleedSizePanel.add('edittext', [65,25,150,35], '0.6'),
    heightBleedInput = bleedSizePanel.add('edittext', [65,55,150,75], '0.6'),
    topLeft = bleedSizePanel.add('radiobutton', [200,10,210,20]),
    topCenter = bleedSizePanel.add('radiobutton', [220,10,230,20]),
    topRight = bleedSizePanel.add('radiobutton', [240,10,250,20]),
    middleLeft = bleedSizePanel.add('radiobutton', [200,30,210,40]),
    middleCenter = bleedSizePanel.add('radiobutton', [220,30,230,40]),
    middleRight = bleedSizePanel.add('radiobutton', [240,30,250,40]),
    bottomLeft = bleedSizePanel.add('radiobutton', [200,50,210,60]),
    bottomCenter = bleedSizePanel.add('radiobutton', [220,50,230,60]),
    bottomRight = bleedSizePanel.add('radiobutton', [240,50,250,60]),
    strokeWidth = bleedSizePanel.add ('edittext', [65,85,150,105], '6'),
    buttons = w.add ('group', [285, 10, 360, 100]),
    runBTN = buttons.add ('button', [0,0,70,30], 'OK');

    w.center();

    middleCenter.value = true;
    bleedSizePanel.add('statictext', [10,60,55,80], 'Height:');
    bleedSizePanel.add('statictext', [15,30,55,50], 'Width:');
    bleedSizePanel.add ('statictext', [13,90,150,110], 'Pixels:');

    buttons.add ('button', [0,35,60,65], 'Cancel');

    runBTN.addEventListener('click', runBtnPressed);

    w.addEventListener ("keydown", function(kd){enterPressed(kd)});
