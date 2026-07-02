RadioMed Team Page — Photo Placement
=====================================

Drop this whole "team-photos" folder's images into:
  /public/images/team/

The TeamPage.tsx component references them at exactly these paths:
  /images/team/tosin-majekodunmi.jpg
  /images/team/rotimi-babalola.jpg
  /images/team/amina-baloni.jpg
  /images/team/olukayode-fabunmi.jpg
  /images/team/uju-ofomata-aderemi.jpg
  /images/team/abdulakeem-balogun.jpg
  /images/team/imran-farid.jpg
  /images/team/linda-rogers.jpg
  /images/team/gboyega-adegbola.jpg

Two people have NO photo in the source deck and will render as
navy monogram avatars automatically (no action needed unless you
want to supply real photos later):
  - Dr. Bola Jones (Advisory Board)
  - Ayodeji Ifeanyi Ogunleye (Management)

Note: gboyega-adegbola.jpg was extracted at very low resolution
(107x107px) from the source PDF — it will look soft/pixelated at
the card size used on the page. Recommend swapping in a higher-res
photo if he has one on file.
